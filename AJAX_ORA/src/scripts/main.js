const CLIENT_ID =
  "268183546531-mt0hl8gs8ghvbhvkh131n0kl465t9m39.apps.googleusercontent.com";
const API_KEY = "AIzaSyCQQHUP8ouglMs-PDrgnh67RcBq9cPqR3g";
const DISCOVERY_DOC =
  "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest";

const SCOPES =
  "https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify";

let tokenClient;
let gapiInited;
let gisInited;
document.getElementById("login_button").style.visibility = "hidden";
document.getElementById("refresh_button").style.visibility = "hidden";
document.getElementById("logout_button").style.visibility = "hidden";
document.getElementById("new_mail").style.visibility = "hidden";
document.getElementById("table_div").style.visibility = "hidden";

function gapiLoaded() {
  gapi.load("client", initGapiClient);
}
// for ui testing only
// signedInState();

async function initGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  enableButton();
}
function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: "", // defined later
  });
  gisInited = true;
  enableButton();
}

function enableButton() {
  if (gapiInited && gisInited) {
    document.getElementById("login_button").style.visibility = "visible";
  }
}
function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    clearTable();
    signedInState();
    await getMessages();
  };
  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: "" });
  }
}

function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken("");
    clearState();
  }
}

async function getMessages() {
  clearTable();
  console.log(gapi.client.getToken()?.access_token);
  console.log(google.accounts);
  let response;
  try {
    response = await gapi.client.gmail.users.messages.list({
      userId: "me",
      maxResults: 25,
    });
  } catch (err) {
    displayError(err.message);
    return;
  }
  const datas = response.result.messages;
  console.log(datas);
  for (num in datas) {
    await getDetailedMessage(num, datas[num].id);
  }
}

async function getDetailedMessage(num, messageID) {
  let response;
  try {
    response = await gapi.client.gmail.users.messages.get({
      userId: "me",
      id: messageID,
    });
  } catch (err) {
    displayError(err.message);
    return;
  }
  console.log(response.result);
  appendchild(num, response.result);
}

async function handleCreateDraft() {
  let to = document.getElementById("mail_receiver").value;
  let subject = document.getElementById("mail_subject").value;
  let content = document.getElementById("mail_content").value;
  if (to === "" || subject === "") {
    displayError("Please Enter The Receiver Email and Subject");
    return;
  }
  let response;
  try {
    response = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/drafts`,
      {
        method: "POST",
        body: DraftTemplate(subject, to, content),
        headers: {
          Authorization: `Bearer ${gapi.client.getToken().access_token}`,
        },
      },
    )
      .then((res) => res.json())
      .catch((err) => {
        displayError(err.message);
        return;
      });
  } catch {
    (error) => {
      displayError(error.message);
      return;
    };
  }
  clearEmailField();
  displayError("Email created");
}
async function handleSendingEmail() {
  let to = document.getElementById("mail_receiver").value;
  let subject = document.getElementById("mail_subject").value;
  let content = document.getElementById("mail_content").value;
  if (to === "" || subject === "") {
    displayError("Please Enter The Receiver Email and Subject");
    return;
  }
  let response;
  try {
    response = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages/send`,
      {
        method: "POST",
        body: messageTemplate(subject, to, content),
        headers: {
          Authorization: `Bearer ${gapi.client.getToken().access_token}`,
        },
      },
    )
      .then((res) => res.json())
      .catch((err) => {
        displayError(err.message);
        return;
      });
  } catch {
    (error) => {
      displayError(error.message);
      return;
    };
  }
  clearEmailField();
  displayError("Email Sent!");
}
function appendchild(num, data) {
  let table_body = document.getElementById("display_content");
  let new_tr = document.createElement("tr");
  new_tr.innerHTML = `
    <td class="overflow-auto border border-slate-300 table-cell ">${num}</td>
    <td class="overflow-auto border border-slate-300 table-cell ">${HeaderParser(data, "Subject")}</td>
    <td class="overflow-auto border border-slate-300 table-cell">${HeaderParser(data, "Date")}</td>
    <td class="overflow-auto border border-slate-300 table-cell">${data.snippet}</td>
    <td class="overflow-auto border border-slate-300 table-cell">${HeaderParser(data, "From")}</td>
    <td class="overflow-auto border border-slate-300 table-cell">${data.labelIds}</td>
`;
  table_body.appendChild(new_tr);
}
function HeaderParser(data, name) {
  for (i in data.payload.headers) {
    if (data.payload.headers[i].name == name) {
      return data.payload.headers[i].value;
    }
  }
}
function displayError(error) {
  let error_text = document.getElementById("error_text");
  error_text.textContent = error;
}

function DraftTemplate(subject, to, content) {
  let message = "";
  message += `From: \r\n`;
  message += `To: ${to}\r\n`;
  message += `Subject: ${subject}\r\n\r\n`;
  message += `${content}`;

  let json_message = {
    id: "",
    message: {
      raw: btoa(message),
      payload: {
        headers: [
          { name: "To", value: to },
          { name: "Subject", value: subject },
        ],
        body: {
          data: btoa(content),
        },
      },
    },
  };
  return JSON.stringify(json_message);
}

function messageTemplate(subject, to, content) {
  let message = "";
  message += `From: \r\n`;
  message += `To: ${to}\r\n`;
  message += `Subject: ${subject}\r\n\r\n`;
  message += `${content}`;
  let json_message = {
    raw: btoa(message),
    payload: {
      headers: [
        { name: "To", value: to },
        { name: "Subject", value: subject },
      ],
      body: {
        data: btoa(message),
      },
    },
  };
  return JSON.stringify(json_message);
}
function clearEmailField() {
  document.getElementById("mail_subject").value = "";
  document.getElementById("mail_receiver").value = "";
  document.getElementById("mail_content").value = "";
}
function signedInState() {
  document.getElementById("login_button").style.visibility = "hidden";
  document.getElementById("refresh_button").style.visibility = "visible";
  document.getElementById("logout_button").style.visibility = "visible";
  document.getElementById("new_mail").style.visibility = "visible";
  document.getElementById("table_div").style.visibility = "visible";
}

function clearState() {
  document.getElementById("display_content").innerHTML = "";
  document.getElementById("login_button").style.visibility = "visible";
  document.getElementById("refresh_button").style.visibility = "hidden";
  document.getElementById("logout_button").style.visibility = "hidden";
  document.getElementById("new_mail").style.visibility = "hidden";
  document.getElementById("table_div").style.visibility = "hidden";
}

function clearTable() {
  document.getElementById("display_content").innerHTML = "";
}
function createForm() {
  let mail_section = document.getElementById("mail_section");
  if (mail_section.innerHTML !== "") {
    mail_section.innerHTML = "";
    return;
  }
  mail_section.innerHTML = `
      <div class="flex flex-col p-4 ml-6" id="mail_form">
        <form id="send_mail" class="flex flex-col w-11/12">
          <input
            id="mail_subject"
            type="text"
            class="w-full h-10 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-4"
            placeholder="Subject"
          />
          <input
            id="mail_receiver"
            type="email"
            class="w-full h-10 shadow-sm text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-4"
            placeholder="To"
          />
          <textarea
            name=""
            id="mail_content"
            class="w-full h-32 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-4"
            placeholder="Content"
          ></textarea>
        </form>
        <div class="flex flex-row w-full justify-around">
            <button id="create_draft_btn" class="w-1/3 h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800" 
            onclick="handleCreateDraft()"
            >Create Draft</button>
            <button id="send_email_btn" class="w-1/3 h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800"
            onclick="handleSendingEmail()"
            >Send Email</button>
        </div>
      </div>
`;
}

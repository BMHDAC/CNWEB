const table = document.getElementById("display_content");
console.log(table);
const url_param = new URLSearchParams(window.location.href);
if (!url_param.has("access_token")) {
  window.location.href = "../index.html";
}
const access_token = url_param.get("access_token");
async function getMessageId() {
  const response = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
  return response.json();
}

function appendchild(data) {
  let table_body = document.getElementById("display_content");
  let new_tr = document.createElement("tr");
  new_tr.innerHTML = `
    <td class="overflow-auto border border-slate-300 table-cell ">${data.payload.headers[22].value}</td>
    <td class="overflow-auto border border-slate-300 table-cell">${data.payload.headers[16].value}</td>
    <td class="overflow-auto border border-slate-300 table-cell">${data.snippet}</td>
    <td class="overflow-auto border border-slate-300 table-cell">${data.payload.headers[23].value}</td>
    <td class="overflow-auto border border-slate-300 table-cell">Updating</td>
`;
  table_body.appendChild(new_tr);
}
async function getMessageDetails() {
  let ids = await getMessageId();
  for (num in ids.messages) {
    let res = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages/${ids.messages[num].id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    )
      .then((res) => res.json())
      .catch((err) => {
        return (window.location.href = "../index.html");
      })
      .then((res) => res);
    appendchild(res);
    console.log(res);
  }
  return;
}
getMessageDetails();

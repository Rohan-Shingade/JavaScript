const chatInput = document.querySelector(".chat-input textarea");
const sendMsgBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMsg;
const API_KEY = "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";

const createChatLi = (message, className) => {

  //create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;

  return chatLi;
}

const generateResponse = () => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: userMsg}]
    })
  }

  //send POST request to API to get response
  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  })
}

const handleChat = () => {
  userMsg = chatInput.value.trim();
  //console.log(userMsg);

  if(!userMsg) return;

  //Append the user's msg to the chatbox
  chatbox.appendChild(createChatLi(userMsg, "outgoing"));

  setTimeout(() => {
    //Display thinking message while waiting for the response
    chatbox.appendChild(createChatLi("Thinking...", "incoming"));
    generateResponse();
  }, 600);
}

sendMsgBtn.addEventListener("click", handleChat);
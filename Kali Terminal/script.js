const commandInput = document.querySelector(".commandField");
const output = document.querySelector(".output");
const outputContainer = document.querySelector(".command-output");
const commands = ["help", "clear", "contact", "code"];

const showAllAvailableCmds = (messageBox) => {
    messageBox.innerHTML += " <br>Available Commands to use are: ";
    commands.forEach((cmd) => {
        messageBox.innerHTML += `<br> → ${cmd}`;
    });
    messageBox.innerHTML += "<br><br>» Mini Project With HTML CSS JS For Start .";
}
const clearTerminal = () => {
    outputContainer.innerHTML = '';
}

const openGitHubProfile = () => {
    window.open("https://github.com/Abderrahim-abid11");
}

const contributionLink = () => {
    window.open("https://github.com/Abderrahim-abid11/Web-Projects/");
}

const executeCommand = (cmd, messageBox) => {
    switch(cmd)
    {
        case "help":
            showAllAvailableCmds(messageBox);
            break;
        case "clear":
            clearTerminal(messageBox);
            break;
        case "contact":
            openGitHubProfile();
            break;
        case "code":
            contributionLink();
            break;
    }
}
commandInput.addEventListener("keydown", (e) => {
    const inputCommand = commandInput.value.trim();

    if(e.key === "Enter" && inputCommand !== '')
    {
        const createElement = output.cloneNode(true);
        const outputTextMessage = createElement.querySelector(".outputText");
        createElement.style.display = "block";
        outputTextMessage.textContent = inputCommand;

        if(commands.includes(inputCommand))
            executeCommand(inputCommand, outputTextMessage);
        else
            outputTextMessage.innerHTML += "<br>Command not found. Type \'help\' for list of available commands.";

        commandInput.value = '';

        if(inputCommand != "clear")
            outputContainer.append(createElement);
    }
});

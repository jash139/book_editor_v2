import homeContent from "../constants/homeContent";

const contactLinks = homeContent.contactLinks;

const copyEmail = () => {
    var tempInput = document.createElement("input");
    tempInput.value = contactLinks.email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
};

export default copyEmail;
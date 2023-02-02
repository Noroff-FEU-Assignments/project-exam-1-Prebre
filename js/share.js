// Share

var pageLink = window.location.href;
var pageTitle = String(document.title).replace(/\&/g, "%26");

const shareFB = () => {
  window.open(
    `http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );

  return false;
};

const shareTwitter = () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );

  return false;
};

const shareReddit = () => {
  window.open(
    `https://www.reddit.com/submit?url=${pageLink}`,
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );

  return false;
};

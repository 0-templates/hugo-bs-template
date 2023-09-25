//When a new admin clicks a email invite link, redirect them to the right place
if (["#invite_token", "#recovery_token"].some((word) => location.hash.startsWith(word))) {
    console.log("redirecting")
    window.location.href = "/admin/" + location.hash
}

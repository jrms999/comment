function getComment () {
	var username = document.getElementById ("username").value
	var comment = document.getElementById ("comment").value
	var userText = document.createTextNode(username)
	var commentText = document.createTextNode (comment)

	var newUserName = document.createElement("H3")
	newUserName.appendChild(userText)
	newUserName.className = "newh3"
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)

	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)

	document.getElementById("myComment").appendChild(newListItem)

}
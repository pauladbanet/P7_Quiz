<h1>
    Show question:
</h1>

<ul>
    <li>Question: <b><%= quiz.question %></b></li>
    <li>Answer: <b><%= quiz.answer %></b></li>
</ul>

<a href="/quizzes"><button>Go back</button></a>
<ul>
    <% for (var i in tips) { %>
        <% var tip = tips[i]; %>
        <% var accepted = tip.accepted; %>
        <% var isAdmin = session.user && session.user.isAdmin; %>
        <% var isQuizAuthor = session.user && quizAuthorId && quizAuthorId === session.user.id; %>
        <% var isTipAuthor = session.user && quizAuthorId && quizAuthorId === session.user.id; %>
    <% if (accepted || isAdmin || isQuizAuthor) { %>
            <li>
                <%= tip.text %>
                <% if (!accepted && (isAdmin || isQuizAuthor)) { %>
                    <a href="/quizzes/<%= quizId %>/tips/<%= tip.id %>/accept?_method=PUT">
                        <button>Accept</button>
                    </a>
                <% } %>
                <% if (isAdmin || isQuizAuthor) { %>
                    <a href="/quizzes/<%= quizId %>/tips/<%= tip.id %>?_method=DELETE">
                        <button>Delete</button>
                    </a>
                <% } %>
                <div >
                    <small> (Created by <%= tip.author ? tip.author.username : "Anonymous" %>) </small>
                </div>
            </li>
        <% } %>
    <% } %>
</ul>

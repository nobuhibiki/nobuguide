
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/socials">Contribute</a>
    <a href="/guides">Guides</a>
</nav>

<slot></slot>

<style>
    nav {
        margin-right: 50px;
        margin-top: 40px;
        margin-bottom: 40px;
        text-align: right;
    }
    nav a {
        font-family: spacegrotesk;
        color: white;
        text-decoration: none;
    }
    nav a :hover {
        font-weight: bold;
    }
</style>
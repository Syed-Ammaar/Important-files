import Link from "next/link";

const Header = () => (
    <header>
      <div id='navbar'>
        <h1 id='logo'>TELANGANA REAL ESTATE REGULATORY AUTHORITY GOVERNMENT OF TELANGANA</h1>
        <div id='searchbar'>
          <input id='input' type="text" placeholder="Project Name, Builder, Agent" />
          <button id='btn' type='submit'>Search</button>
        </div>
        
        <nav>
          <Link class="navlist" href="#">Home</Link> | <a class="navlist" href="#">FAQ</a> | <a class="navlist" href="#">Map</a>
        </nav>
      </div>
      
    </header>
  );

  export default Header;
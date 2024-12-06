import "./Header.css";

function Header() {
    const headerCSS = {
        backgroundColor: "yellow",
        border: "1px solid black",
        margin: "10px"
     }
    return (
     <nav style={headerCSS}>
        This is my Header Of Webapp!!
     </nav>
    );
  }

  function Header2() {
    return (
     <nav className="text-3xl font-bold underline">
        This is my Header 2 Of Webapp!!
     </nav>
    );
  }

  function Main() {
    return (
     <main>
        This is my Main Of Webapp!!
     </main>
    );
  }
  export  { Header, Header2 };
  export default Main;
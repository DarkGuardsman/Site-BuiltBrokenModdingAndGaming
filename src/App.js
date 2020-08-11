import React from 'react';
import './App.css';
import Page from './Page';
import Logo from './logo_64.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "N/A" };
    }


    handleClick(dest) {
        this.setState({value: dest});
    }

    navlink(name, dest) {
        return <a className="Nav" href={dest} onClick={() => {this.handleClick(dest)}}>{name}</a>
    }

 render() {
  return (
  <div className="App">
    <nav className="Header">
        <a href="index.html" className="Logo">
            <img src={Logo} alt="Built Broken Modding" />
            Built Broken Modding
            <h6 className="Motto">Build it | Break it | Reanimate it</h6>
        </a>
        <div className="NavLink">
            {this.navlink("Home", "index.html")}
            {this.navlink("News", "news.html")}
            {this.navlink("Minecraft", "minecraft.html")}
            {this.navlink("Games", "games.html")}
        </div>
    </nav>
    <Page value={this.state.value}>
    </Page>
    <footer className="Footer">
        <p>Copyright BuiltBrokenModding ©2020</p>
        {this.navlink("About", "about.html")}
        <a href="https://github.com/DarkGuardsman/Site-BuiltBrokenModdingAndGaming">Visit our Github!</a>
    </footer>
</div>
  );
}
}

export default App;

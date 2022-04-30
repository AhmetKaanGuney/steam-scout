import React from 'react'
import githubIcon from '../assets/icons/GitHub-Mark-Light-32px.png'

export default function About() {
  return (
    <main>
      <h2 className='about-page-title'>Welcome To SteamScout</h2>
      <p className='about-p'>
        SteamScout is a web app for browsing undiscovered, unexplored and overlooked games that are on Steam. 
        It uses <a target="_blank" rel="noopener noreferrer" href='https://github.com/AhmetKaanGuney/steam-apps-db'>SteamAppsDB</a> to get the information about the games.
      </p>

      <h3 className='about-title'>Motivation</h3>
      <p className='about-p'>
        I wanted to develop a mobile web app that will strengthen my JavaScript
        and React skills. I'm very interested in video games and I often browse Steam to find interesting games. <br/>
        <br/>
        Steam is a great platform to browse games but 
        after a while I realised that the same popular games are always at the 
        top of my browsing list. And searching for hidden gems takes a lot of 
        time. <br/>
        <br/>
        So I thought why not make a website that only contains games under 
        one million owners (approximately).That way you can browse a lot of 
        games that you haven't been exposed to.
      </p>

      <h3 className='about-title'>Disclaimers</h3>
      <p className='about-p'>
        This project is a hobby project and is not affiliated with <a target="_blank" rel="noopener noreferrer" href='https://www.valvesoftware.com/'>Valve</a> or <a target="_blank" rel="noopener noreferrer" href='https://store.steampowered.com/'>Steam</a>.
        This website displays various information and statistics about Steam 
        applications which are obtained from <a target="_blank" rel="noopener noreferrer" href='https://github.com/AhmetKaanGuney/steam-apps-db'>SteamAppsDB</a>.<br/>
        <span className='red-text'>These informations and statistics aren't 100% accurate and not always up to date.</span><br/>
        <br/>
        <i>
        Steam and the Steam logo are trademarks of Valve Corporation. All other
        trademarks are property of their respective owners.
        </i>
      </p>
      <div className='about-footer-container'>
        <div className='about-footer'>
          <a className='about-link' target="_blank" rel="noopener noreferrer" href='https://github.com/AhmetKaanGuney/steam-scout'><img className='github-icon'
          src={githubIcon} alt='github-icon'/></a>
          <a className='about-link' target="_blank" rel="noopener noreferrer" href='https://store.steampowered.com/'>Powered By Steam</a><span className='about-footer-ampersand'>&</span><a className='about-link' target="_blank" rel="noopener noreferrer" href='https://steamspy.com/'>Powered By SteamSpy</a>
        </div>
      </div>
    </main>
  )
}

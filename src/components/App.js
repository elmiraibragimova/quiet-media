import React, { PureComponent } from 'react'
import Nav from './Nav'
import '../css/main.css'

class App extends PureComponent {
  render() {
    return (
      <section className="layout">
        <aside className="layout__sidebar">
          <Nav />
        </aside>
        <main className="layout__content">
          <section id="params" className="screen"></section>

          <section id="preview" className="screen"></section>
        </main>
      </section>
    )
  }
}

export default App

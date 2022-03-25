export default function MyComponentTemplate({ html, state }) {
    const { name } = state.attrs
    return html`
        <span>Name: ${name}</span>
        <script type="module">
            class MyComponent extends HTMLElement {
            constructor() {
                super()
            }
            connectedCallback() {}
            }
            customElements.define('my-component', MyComponent)
        </script>
    `
  }

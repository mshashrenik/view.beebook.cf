import ReactDOM from 'react-dom';
import Reader from 'containers/Reader'

const id = new URLSearchParams(window.location.search).get("id")
console.log(id)
const EPUB_URL = `react-epub-viewer/files/${id
}.epub`;

ReactDOM.render(<Reader url={EPUB_URL} />,  document.getElementById('root'));
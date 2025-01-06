import './App.css';

function List() {
  return (
    <div>
      <ol>
        <li>
          Fruits
          
          <ul>
          <br/>
            <li>Apple</li>
            <li>Mango</li>
            <li>Banana</li>
          </ul>
        </li>
        <br/>
        <br/>
        <li>
          Vegetables
          <ol style={{ listStyleType: 'lower-roman' }}>
          <br/>

            <li>Carrot</li>
            <li>Beans</li>
            <li>Beetroot</li>
          </ol>
        </li>
        <br/>
        <br/>
        <li>
          Birds
          
          <ul style={{ listStyleType: 'square' }}>
          <br/>
            <li>Peacock</li>
            <li>Parrot</li>
            <li>Crow</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default List;

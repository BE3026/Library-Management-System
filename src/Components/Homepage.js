import React, { useState, useEffect } from 'react';
import './Homepage.css';
import CartPage from './cartpage';
import Account from './Account';
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [clicked,setClick]=useState(false);
  const [item,setItem]=useState([])
  const [userpage,setuserpage]=useState(false);
  useEffect(() => {
    fetchBooks();
  }, []);


  const fetchBooks = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyANn7D3yOd4FVZyerO2RhloZn1hgec5w_o');
      const data = await response.json();
      setBooks(data.items);
      //console.log(data.items);
      //console.log(typeof(data))
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  const click=()=>{
    setClick(true)
  }
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    
  };
  const setuserclick=()=>{
    setuserpage(true)
  }
 if(userpage){
  return <Account />;
 }
  const filteredBooks = books.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 if(clicked){
  //console.log(item);
  return <CartPage book={item} books={books} />
 }
  return (
    <div >
      
      <header>
        <nav>
          <ul className="menu">
            <li style={{backgroundColor:'#4caf50',borderRadius:'5px',padding:'3px'}}>Home</li>
            <li  onClick={()=>alert("No items in cart")}>Cart</li>
            <li onClick={()=>setuserclick()}>User Account</li>
          </ul>
        </nav>
      </header>
     
      <div className="container2">
        <h1>Library Management System</h1>
        <h2>List of Available Books</h2>
        <input
          type="text"
          placeholder="Search Books"
          value={searchTerm}
          onChange={handleSearch}
        />
       
        <ul className="book-list">
        {filteredBooks.map((book,index) => (
            <div >
            <li key={index}>
              <h3>{book.volumeInfo.title}</h3>
              <p>Author: {book.volumeInfo.authors?book.volumeInfo.authors:'Not Available'}</p>
              <button onClick={()=>{setItem(book.volumeInfo);click()}}>Add to cart</button>
            </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

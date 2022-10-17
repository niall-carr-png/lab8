<<<<<<< HEAD
import React from "react";
import { BookItem } from "./bookitem";

/* Displays the array on the read page */
export class Books extends React.Component{
    render(){
            return this.props.books.map( (book)=>{
                return <BookItem book={book}></BookItem>
            }
            );
    }
=======
import React from "react";
import { BookItem } from "./bookitem";

/* Displays the array on the read page */
export class Books extends React.Component{
    render(){
            return this.props.books.map( (book)=>{
                return <BookItem book={book}></BookItem>
            }
            );
    }
>>>>>>> f4780dc9e271a79d3e3306af87d47193847356fa
}
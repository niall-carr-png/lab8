import React from "react";
import Card from "react-bootstrap/card";
import Button from "react-bootstrap/button";
import { Link } from "react-router-dom";

/* Defines the formatting for the array */
export class BookItem extends React.Component{
    render(){
        return(
            <div>
                {/* <h4>{this.props.book.title}</h4>
                <img src={this.props.book.thumbnailUrl}></img>
                <p>{this.props.book.authors[0]}</p> */}
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.book.cover}></img>
                            <footer>
                            {this.props.book.author}
                            </footer>
                        </blockquote>
                    </Card.Body>

                    <Link to={"/edit/"+this.props.book._id} className="btn btn-primary">Edit</Link>

                </Card>
            </div>
        );
    }
}
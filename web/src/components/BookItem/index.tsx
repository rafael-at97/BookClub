import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function BookItem() {
    return(
        <article className="book-item">
            <header>
                <img src="https://image.shutterstock.com/image-vector/harry-potter-glasses-vector-icon-260nw-1528216298.jpg" alt="HP"/>
                <div>
                    <strong>Harry Potter and the Chamber of Secrets</strong>
                    <span>J. K. Rowling</span>
                </div>
            </header>

            <p>
            The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, 
            during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" 
            has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families.
            </p>

            <footer>
                <p>
                    Limite de dias
                    <strong>5</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Pedir o livro
                </button>
            </footer>
        </article>
    );
}

export default BookItem;
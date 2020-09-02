import React from 'react';

import PageHeader from '../../components/PageHeader';
import BookItem from '../../components/BookItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

export default function BookList() {
    return (
        <div id="page-borrow" className="container">
            <PageHeader title="Estes são os livros disponíveis.">
                <form id="search-books">
                    <Select 
                        name="genre" 
                        label="Gênero"
                        options={[
                            {value: "Fantasia", label:"Fantasia" },
                            {value: "História", label:"História" },
                            {value: "Biografia", label:"Biografia" },
                        ]}
                    />
                    <Select 
                        name="week-day" 
                        label="Dia da semana"
                        options={[
                            {value: "0", label:"Domingo" },
                            {value: "1", label:"Segunda" },
                            {value: "2", label:"Terça" },
                            {value: "3", label:"Quarta" },
                            {value: "4", label:"Quinta" },
                            {value: "5", label:"Sexta" },
                            {value: "6", label:"Sábado" },
                        ]}
                    />
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <BookItem/>
                <BookItem/>
                <BookItem/>
            </main>
        </div>
    )
};
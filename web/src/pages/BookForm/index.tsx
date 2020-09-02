import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

export default function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''},
    ]);

    function addNewSchedule() {
        setScheduleItems([
            ...scheduleItems, 
            {
                week_day: 0,
                from: '',
                to: '',
            }
        ]);
    }

    return  (
        <div id="page-lend" className="container">
            <PageHeader title="Compartilhe as histórias."
                        description="O primeiro passo é preencher esse formulário."/>
        
            <main>
                <fieldset>
                    <legend>Sobre o livro</legend>

                    <Select 
                        name="genre" 
                        label="Gênero"
                        options={[
                            {value: "Fantasia", label:"Fantasia" },
                            {value: "História", label:"História" },
                            {value: "Biografia", label:"Biografia" },
                        ]}
                    />
                    <Input name="name" label="Nome do livro"/>
                    <Input name="avatar" label="Avatar"/>
                    <TextArea name="bio" label="Resumo do livro"/>
                    <Input name="days" label="Limite de dias para empréstimo"/>
                </fieldset>

                <fieldset>
                    <legend>Seu contato</legend>

                    <Input name="whatsapp" label="WhatsApp"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis para entrega
                        <button type="button" onClick={addNewSchedule}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
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
                                <Input name="from" label="Das" type="time"/>
                                <Input name="to" label="Até" type="time"/>
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
};
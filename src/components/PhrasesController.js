import React from "react";
import { getEmoji } from "./Phrases";
import './Phrases.css';

class PhraseController extends React.Component {
    render () {
        return (
            <q className="phrase">
                {getEmoji()}{getEmoji()}{getEmoji()}
            </q>
        )
    }
}
export default PhraseController;

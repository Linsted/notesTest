import { NotesContext } from "context";
import React, { useContext } from "react";
import { ItemStyled,HeaderStyled, TextStyled  } from "./ListItem.styled";
import PropTypes from 'prop-types';

export const ListItem = ({ note }) => {
    const { handleItemClick, selectedNote } = useContext(NotesContext);

  let noteTextPreview;
if (note.noteText.length > 15) {
    noteTextPreview = `${note.noteText.slice(0, 15)}...`;
} else if (note.noteText.length === 0) {
    noteTextPreview = `New note`;
} else {
    noteTextPreview = note.noteText;
}



    return (
        <>
            <ItemStyled isSelected={selectedNote === note.id} onClick={() => handleItemClick(note.id)}>
                <HeaderStyled>{noteTextPreview}</HeaderStyled>
                <TextStyled>{note.noteText}</TextStyled>
            </ItemStyled>
        </>
    );
};

ListItem.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        noteText: PropTypes.string.isRequired,
    }).isRequired,
};
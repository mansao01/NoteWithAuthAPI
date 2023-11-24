import noteModel from "../model/NoteModel.js";
import NoteModel from "../model/NoteModel.js";

export const getNotesById = async (req, res) => {

    try {
        let response = await noteModel.findAll({
            where: {
                userId: req.params.userId
            }
        })
        res.status(200).json({data: response})
    } catch (e) {
        res.status(400).json({msg: e.message})
    }
}

export const getDetailNoteById = async (req, res) => {
    try {
        const noteId = req.params.id; // Extract the note ID from the request parameters

        // Use Sequelize's findOne method to retrieve a single note by its ID
        const note = await noteModel.findOne({
            where: {
                id: noteId
            }
        });

        if (!note) {
            // Handle the case where the note was not found
            return res.status(404).json({ msg: 'Note not found' });
        }

        // Respond with the found note
        return res.status(200).json({ data: note });
    } catch (error) {
        // Handle any unexpected errors and return a meaningful error message
        return res.status(500).json({ msg: 'Internal server error' });
    }
};


export const getNotes = async (req, res) => {
    try {
        let response = await noteModel.findAll()
        res.status(200).json({data: response})
    } catch (e) {
        res.status(400).json({msg: e.message})
    }
}

export const createNote = async (req, res) => {
    const {title, description, userId} = req.body

    try {
        const note = await NoteModel.create({
            title: title,
            description: description,
            userId: userId
        })
        res.status(201).json({msg: "Note berhasil dibuat", data: note})
    } catch (e) {
        res.status(400).json({msg: "Note tidak berhasil dibuat"});
    }
}

export const updateNote = async (req, res) => {
    const{title, description} = req.body
    try{
        await NoteModel.update({
            title: title,
            description: description
        },{
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({msg: "Note berhasil diupdate"})
    }catch (e) {
        res.status(400).json({msg: "Note tidak berhasil diupdate"})
    }
}

export const deleteNote = async (req, res) => {
    try {
        await NoteModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg: "Note berhasil dihapus"})
    }catch (e) {
        res.status(400).json({msg: "Note tidak berhasil dihapus"})
    }
}


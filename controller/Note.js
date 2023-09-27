import noteModel from "../model/NoteModel.js";

export const getNotesById = async (req, res) => {

    try {
        let response = await noteModel.findAll({
            where: {
                userId: req.params.userId
            }
        })
        res.status(200).json({data: response})
    }catch (e) {
        res.status(400).json({msg: e.message})
    }
}


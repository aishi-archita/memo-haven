import apiMemoHaven from "../../axios/apiMemoHaven";

// API call for get all notes
const getNotes = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await apiMemoHaven.get("/notes/all", config);
  return response.data;
};

// API call for create new notes
const createNewNote = async (token, noteObj) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await apiMemoHaven.post("/notes/create", noteObj, config);
  return response.data;
};

//API call for Editing a note
const editNote = async (token, updatedNoteObj) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await apiMemoHaven.post(
    "/notes/edit",
    updatedNoteObj,
    config
  );
  return response.data;
};

// API call for deleteing an existing note
const deleteExistingNote = async (token, noteId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const reqBody = {
    noteId: noteId,
  };

  const response = await apiMemoHaven.post("/notes/delete", reqBody, config);
  return response.data;
};

const notesService = { getNotes, createNewNote, deleteExistingNote, editNote };

export default notesService;

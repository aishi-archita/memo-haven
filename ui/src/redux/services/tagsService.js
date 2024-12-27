import apiMemoHaven from "../../axios/apiMemoHaven";

// API call to get all tags
const getTags = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await apiMemoHaven.get("tags/all", config);
  return response.data;
};

// API call to create a new Tag
const createNewTag = async (token, reqBody) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await apiMemoHaven.post("tags/new", reqBody, config);
  return response.data;
};

// API to Edit an existing tag
const editExisitingTag = async (token, reqBody) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await apiMemoHaven.post("tags/edit", reqBody, config);
  return response.data;
};

// API call to delete an existing tag
const deleteExistingTag = async (token, tagId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const reqBody = {
    tagId: tagId,
  };

  const response = await apiMemoHaven.post("tags/delete", reqBody, config);
  return response.data;
};

const tagsService = {
  getTags,
  createNewTag,
  editExisitingTag,
  deleteExistingTag,
};

export default tagsService;

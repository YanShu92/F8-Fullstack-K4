const api = "https://khkmdc-8080.csb.app/mindmap";

export const getMindmaps = async () => {
  const response = await fetch(`${api}`);
  const data = await response.json();
  return data;
};

export const getMindmapById = async (id) => {
  const response = await fetch(`${api}/${id}`);
  const data = await response.json();
  return data;
};

export const postMindmap = async (data) => {
  const response = await fetch(`${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);
  if (response.ok) {
    return data;
  }
  return null;
};

export const updateMindmapById = async (data) => {
  const response = await fetch(`${api}/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return data;
  }
  return null;
};

export const deleteMindmapById = async (data) => {
  const response = await fetch(`${api}/${data.id}`, {
    method: "DELETE",
    mode: "cors",
  });
  if (response.ok) {
    return data;
  }
  return null;
};

export const updateMindmapAll = async (data) => {
  const response = await fetch(`${api}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return data;
  }
  return null;
};

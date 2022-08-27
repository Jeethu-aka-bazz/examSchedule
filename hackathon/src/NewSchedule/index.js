const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getBranches = async (event) => {
  const params = {
    TableName: "examhall-table-dev",
    Key: {
      PK: "newSchedule",
      SK: event.pathParameters.id,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { branches } = Item;
      return { branches };
    } else {
      return {
        error: "Connot find Branch",
      };
    }
  } catch (err) {
    return err;
  }
};

module.exports.getDepartment = async (event) => {
  const params = {
    TableName: "examhall-table-dev",
    Key: {
      PK: "newSchedule",
      SK: event.pathParameters.dept,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { department } = Item;
      return { department };
    } else {
      return {
        error: "Connot find Department",
      };
    }
  } catch (err) {
    return err;
  }
};

module.exports.getExamType = async (event) => {
  const params = {
    TableName: "examhall-table-dev",
    Key: {
      PK: "newSchedule",
      SK: event.pathParameters.exmtype,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { ExamType } = Item;
      return { ExamType };
    } else {
      return {
        error: "No ExamType Matched",
      };
    }
  } catch (err) {
    return err;
  }
};

module.exports.getSubjectsofEEE = async (event) => {
  const params = {
    TableName: "examhall-table-dev",
    Key: {
      PK: "EEE",
      SK: event.pathParameters.eee,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { subjectcode } = Item;
      return { subjectcode };
    } else {
      return {
        error: "No Subjects in EEE",
      };
    }
  } catch (err) {
    return err;
  }
};

module.exports.getSubjectsofCSE = async (event) => {
  const params = {
    TableName: "examhall-table-dev",
    Key: {
      PK: "CSE",
      SK: event.pathParameters.cse,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { subjectcode } = Item;
      return { subjectcode };
    } else {
      return {
        error: "No Subjects in CSE",
      };
    }
  } catch (err) {
    return err;
  }
};

module.exports.getSubjectsofECE = async (event) => {
  const params = {
    TableName: "examhall-table-dev",
    Key: {
      PK: "ECE",
      SK: event.pathParameters.ece,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { subjectcode } = Item;
      return { subjectcode };
    } else {
      return {
        error: "No Subjects in ECE",
      };
    }
  } catch (err) {
    return err;
  }
};

module.exports.getSubjectsofMECH = async (event) => {
  const params = {
    TableName: "examhall-table-dev",
    Key: {
      PK: "MECH",
      SK: event.pathParameters.mech,
    },
  };
  try {
    const { Item } = await docClient.get(params).promise();
    if (Item) {
      const { subjectcode } = Item;
      return { subjectcode };
    } else {
      return {
        error: "No Subjects in MECH",
      };
    }
  } catch (err) {
    return err;
  }
};

module.exports.postItems = async (event) => {
  const body = JSON.parse(event.body);
  const params = {
    TableName: "examhall-table-dev",
    Item: {
      PK: body.PK,
      SK: body.SK,
      department: body.department,
      ExamType: body.ExamType,
    },
  };
  try {
    await docClient.put(params).promise();
    return "Posted to AWS!";
  } catch (err) {
    return err;
  }
};

import { isObjectEmpty } from './utils';

const data = [];

/*
 * @desc    Get a 200 code with a success message to test API's status
 * @route   GET /api/v1/
 * @access  Public
*/
export const getRoot = async (req, res, next) => {
  return res.status(200).json({
    success: true,
  });
};

/*
 * @desc    get all data
 * @route   GET /api/v1/data
 * @access  Public
*/
export const getData = async (req, res, next) => {
  return res.status(200).json({ 
    success: true,
    count: data.length,
    data: data,
  });
};

/*
 * @desc    add data
 * @route   POST /api/v1/data
 * @access  Public
*/
export const postData = async (req, res, next) => {
  if (isObjectEmpty(req.body) || !req.body.payload) {
    return res.status(400).json({
      success: false,
      message: 'Provide input',
    });
  }
  const input = req.sanitize(req.body.payload).toString();
  data.push(input);
  return res.status(201).json({
    success: true,
    count: data.length,
    input: input,
  });
};

/*
 * @desc    update data
 * @route   PUT /api/v1/data/:id
 * @access  Public
*/
export const putData = async (req, res, next) => {
  if (isObjectEmpty(req.body) || !req.body.oldPayload || !req.body.newPayload) {
    return res.status(400).json({
      success: false,
      message: 'Provide input',
    });
  }
  const oldInput = req.sanitize(req.body.oldPayload).toString();
  const newInput = req.sanitize(req.body.newPayload).toString();
  const index = data.indexOf(oldInput);
  if (index === -1) {
    return res.status(500).json({
      success: false,
      message: 'Not found',
    });
  }
  data[index] = newInput;
  return res.status(200).json({
    success: true,
    count: data.length,
    oldValue: oldInput,
    newValue: data[index],
  });
};

/*
 * @desc    delete data
 * @route   DELETE /api/v1/data/:id
 * @access  Public
*/
export const deleteData = async (req, res, next) => {
  return res.status(200).json({delete: 'success'});
};

/*
 * @desc    404 Not Found
 * @route   GET /api/v1/*
 * @access  Public
*/
export const getNotFound = async (req, res, next) => {
  return res.status(404).json({ 404: 'Not Found' });
};

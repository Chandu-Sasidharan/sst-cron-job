import { Handler } from 'aws-lambda';

export const handler: Handler = async _event => {
  try {
    console.log('Handler Called');
    // Intentionally do nothing
  } catch (error) {
    // Intentionally do nothing
  }
};

/** @type {import('@sveltejs/kit').Handle} */
import mongoose from 'mongoose';

export const handle = async ({ event, resolve }) => {
	console.log(mongoose.version);
	return resolve(event);
};

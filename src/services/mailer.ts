import { getApiUrl } from "@/utils"
import axios from "axios"

const sendEmail = async (subject: string, from: string, message: string) => {
	try {
		const res = await axios.post(getApiUrl("/mailer"), {
			to: from,
			message,
			subject,
		})
		if (!res.data.success) throw new Error(res.data.message)
		return { data: null, error: null }
	} catch (err) {
		return { data: null, error: err as Error }
	}
}

export const mailerService = {
	sendEmail,
}

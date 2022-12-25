import { configs } from "@/app/configs"

export const getApiUrl = (path: string) => {
	return configs.API_URL + path
}

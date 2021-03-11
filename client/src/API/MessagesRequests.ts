import { instance } from "./ApiSettings";

export const MessagesRequests = {
  sendMessage: async (): Promise<any> => {
    const response = await instance.post<any>(`/messages/`, {
      headers: {},
    });

    return response.data;
  },
};

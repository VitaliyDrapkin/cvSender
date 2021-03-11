import { instance } from "./ApiSettings";

export const MessagesRequests = {
  sendMessage: async (
    from: string,
    password: string,
    to: string,
    subject: string,
    message: string
  ): Promise<any> => {
    const response = await instance.post<any>(`/messages/`, {
      from,
      password,
      to,
      subject,
      message,
    });

    return response.data;
  },
};

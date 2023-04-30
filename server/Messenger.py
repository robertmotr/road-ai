from twilio.rest import Client


class Messenger:
    def __init__(self, account_sid, auth_token, contact):
        self.account_sid = account_sid
        self.auth_token = auth_token
        self.contact = contact

        self.client = Client(self.account_sid, self.auth_token)

    def send_message(self, message):
        self.client.messages.create(
            from_='+16073502573',
            body=message,
            to=self.contact
        )

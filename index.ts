import { APIGatewayProxyEvent, Handler } from "aws-lambda";

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<any> => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda! Created from GH Actions'),
  };

  return response;
};

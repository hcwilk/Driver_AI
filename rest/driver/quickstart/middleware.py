import logging

# Configure logger for use in middleware (add this at the top of your file)
logger = logging.getLogger(__name__)

class RequestLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Log request path
        logger.info(f"Request path: {request.path}")

        # Log request headers
        for header, value in request.headers.items():
            logger.info(f"Header: {header} - Value: {value}")

        # Get the response
        response = self.get_response(request)

        # Log response status
        logger.info(f"Response status: {response.status_code}")

        return response

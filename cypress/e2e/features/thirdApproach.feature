# @API
# Feature: Third approach API Test
#   This is an third approach API Test

#   Scenario Outline: Create posts through Api
#     # Given User wants to save '<reqBody>' data in url '<url>'
#     Given User post in url '<url>' with data:
#       """
#       <reqBody>
#       """
#     Then Verify post request response status code is <statusCode>
#     And Verify post request response body title as '<resTitle>'
#     Examples:
#       | reqBody                                         | url    | statusCode | resTitle |
#       | {"title": "foo","body": "bar","userId": 1}      | /posts | 201        | foo      |
#       | {"title": "prakash","body": "hero","userId": 2} | /posts | 201        | prakash  |


# Hacker News Newsbot Application

## Description
This newsbot helps you land on Hacker News.  

Here is the basic rundown of the functionality:
1. A cron job crawls Hacker News and Google Alerts for fresh news articles
2. These articles are added to a database
3. The database includes information such as: Article Name, Author, Website, Date of Creation, etc. 
4. The articles are sent to the OpenAI API to get rated on a scale of 0-100 based on the relevancy of the content to the company. In my case, it was whether the news was related to passkeys, WebAuthn etc. as I was working for Corbado
5. The ratings are added to the database
6. If the rating is >= 70, an email notification is immediately sent to Corbado
7. Corbado writes an article and posts it on Hacker News. Here it is important that the article by Corbado mentions the news **AND ADDS VALUE AS EXPERTS IN THE AREA**
8. Do this long enough, and eventually you will land on Hacker News

To find out why this works, read the article below.

## Status
As of now, the backend is running and deployed at Corbado. Right now I'm building the frontend as a fun side-project to also have a dashboard with a clear overview and mabye a built-in integration of the OpenAI API to have all you need in a single place.

## Acknowledgements
Insights and parts of the source code based on article + repo I found in this article on Indie Hackers: https://www.indiehackers.com/post/how-to-hack-hacker-news-and-consistently-hit-the-front-page-56b4a04e12

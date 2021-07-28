# AskForPermissionBot
Has someone ever asked you to gain permission before you do something. Here's a bot for that.

Simply just give it a token (.env file), give it a comma seperated list of people you want to ignore, run `main.sh` and boom, it will annoy the frick out of the entire server.

If you need to shutdown the bot (in case it spams the server), say the word "failsafe" and the bot will stop and shutdown.

What happened:

![](https://file.coffee/u/10iMNNRHIbUpgo.png)

The result:

![](https://file.coffee/u/XM8JI3Fo1JotUF.png)

I'm a petty arsehole, aren't I?

### Available Enviornment Variables (.env)

| Name            | Description                          |
| --------------- | ------------------------------------ |              
| TOKEN           | Discord Bot Token                    |
| IGNORE_USER_IDS | List of IDs to ignore split with `,` |

### Ideas
- Intergrate the DiscordSRV API to prevent you from sending messages without the bot bugging you on minecraft (maybe a seperate repo and programming it in java?)


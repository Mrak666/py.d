#import discord

#client = discord.Client()

#@client.event
#async def on_ready():
#    print('Запустился! {0.user}'.format(client))

#@client.event
#async def on_message(message):
  #  if message.author == client.user:
 #       return
#
  #  if message.content.startswith('+h'):
 #       await message.channel.send(f'  ку !')

#client.run('NzYxNTY1MzU2OTU5MDcyMjU2.X3cdAg.B1ai-sOa6Whez-ovv1ntdTbKfrA')

import discord
import random
import os
from discord.ext import commands

PREFIX='>'

client = commands.Bot(command_prefix=PREFIX)
client.remove_command('help')

@client.event
async def on_ready():
   print('Запустился! {0.user}'.format(client))

@client.command()
async def инфо(ctx):
    guilds = await client.fetch_guilds(limit = None).flatten()    # Получение всех серверов где есть бот
    emb = discord.Embed(title = "Статистика", colour = discord.Color.red())
    emb.add_field(name = "Основная:", value = f"Серверов: **{len(guilds)}**\nУчастников: **{len(set(client.get_all_members()))}**")    # 1: Количество серверов, 2: количество уникальных участников на всех серверах
    emb.add_field(name = "Бот:", value = f"Задержка: **{int(client.latency * 1000)} мс**") # Скорость соединения бота с API дискорда
    await ctx.send(embed = emb)  

# Clear
@client.command(pass_context=True)
async def clear(ctx, amount=100):    
    await ctx.chennel.purge(limit=amount)


#kick
@client.command( pass_context = True )
@commands.has_permissions( administrator = True )

async def kick( ctx, member: discord.Member, *, reason = None ):
	await ctx.channel.purge( limit = 1 )

	await member.kick( reason = reason )
	await ctx.send( f'Выгнал игрока { member.mention }' )

#ban
#@client.command( pass_context = True )
#@commands.has_permissions( administrator = True )


#async def ban( ctx, member: discord.Member, *, reason = None ):
#
#	await member.ban( reason = reason )
#	await ctx.send( f'Забанет игрок { member.mention }' )	

#Ban By Kotov
#bans a user with a reason
@client.command()
@commands.has_permissions(ban_members = True)
async def ban (ctx, member:discord.User=None, reason =None):
    if member == None or member == ctx.message.author:
        await ctx.channel.send("ТЫ че? Сам себя забанить решил? С ума сошел")
        return
    if reason == None:
        reason = "Хах!"
    message = f"Вы были забанены великим АДМИНОМ {ctx.guild.name} за {reason}"
    await member.send(message)
    await ctx.guild.ban(member, reason=reason)
    await ctx.channel.send(f"{member} забанен!")
    await member.ban(reason = reason)
    
#UNBAN
@client.command()
async def unban(ctx, *, member):
    banned_users = await ctx.guild.bans()
    member_name, member_discriminator = member.split("#")

    for ban_entry in banned_users:
        user = ban_entry.user

        if (user.name, user.discriminator) == (member_name, member_discriminator):
            await ctx.guild.unban(user)
            await ctx.send(f'Разбанен {user.mention}')
            return



@client.command(aliases = ["server"])
async def сервер(ctx):
    bot, human = 0, 0
    for member in  ctx.message.guild.members:
        if member.bot:
            bot += 1
        else:
            human += 1
    emojic = 0
    for emoji in ctx.message.guild.emojis:
        emojic += 1
    text, voice = len(ctx.message.guild.text_channels), len(ctx.message.guild.voice_channels)
    emb = discord.Embed(title = "Инфо о сервере", colour = discord.Color.red())
    emb.set_thumbnail(url = ctx.message.guild.icon_url)
    emb.description = f"Название: **{ctx.message.guild.name}**"
    emb.add_field(name = "Участники:", value = f"Всего: **{bot + human}**\nЛюдей: **{human}**\nБотов: **{bot}**")
    emb.add_field(name = "Эмоций:", value = emojic)
    emb.add_field(name = "Каналы:", value = f"Всего: **{text + voice}**\nТекстовых: **{text}**\nГолосовых: **{voice}**")
    emb.add_field(name = "Владелец:", value = ctx.message.guild.owner)
    emb.add_field(name = "Регион:", value = ctx.message.guild.region)
    emb.add_field(name = "Уровень проверки:", value = ctx.message.guild.verification_level)
    emb.add_field(name = "AFK:", value = f"Канал: **{ctx.message.guild.afk_channel}**\nТаймаут: **{ctx.message.guild.afk_timeout}**")
    emb.set_footer(text = f"ID: {ctx.message.guild.id}")
    await ctx.send(embed = emb)

@client.command()
async def gstart(ctx, time, *, prize):
    if time[-1]=="с":
        time=time.replace("с","")
        time=int(time)
    elif time[-1]=="м":
        time=time.replace("м","")
        time=int(time)*60
    elif time[-1]=="ч":
        time=time.replace("ч","")
        time=int(time)*60*60
    elif time[-1]=="д":
        time=time.replace("д","")
        time=int(time)*60*60*24
    giveawayembed = discord.Embed(title="🎉 Конкурс! 🎉",description=f"Приз: {prize}\nНачал: {ctx.author.mention}\nВремя: {time}с",colour=discord.Color.green())
    msg = await ctx.send(embed=giveawayembed)
    await msg.add_reaction("🎉")
    t=time-1
    for n in range(0,time):
        await asyncio.sleep(1)
        tembed=discord.Embed(title="🎉 Конкурс! 🎉",description=f"Приз: {prize}\nНачал: {ctx.author.mention}\nВремя: {t}с",colour=discord.Color.green())
        await msg.edit(embed=tembed)
        t-=1
        d=0
    msg = await msg.channel.fetch_message(msg.id)
    winner = None
    for reaction in msg.reactions:
        if reaction.emoji == "🎉":
            users = await reaction.users().flatten()
            users.remove(client.user)
            try:
                winner = random.choice(users)
            except:
                winner=None
    if winner is not None:
        endembed = discord.Embed(title="🎉Конкурс закончился!🎉",description=f"Приз: {prize}\nПобедитель: {winner.mention}",color=discord.Color.green())
    else:
        endembed = discord.Embed(title="🎉Ошибка конкурса!🎉",description=f"Приз: {prize}\nПобедителя невозможно вычислить!",color=discord.Color.red())
    await msg.edit(embed=endembed)

@gstart.error
async def gstart_error(ctx, error):
    if str(error)=="Command raised an exception: NotFound: 404 Not Found (error code: 10008): Unknown Message":
        pass
    else:
        er="Пример: >gstart 1м Крутой приз\nс-секунда,м-минута,ч-час,д-день"
        errembed = discord.Embed(title="🎉Ошибка конкурса!🎉",description=er,color=discord.Color.red())
        await ctx.send(embed=errembed)
    print(error)


@client.command(pass_context=True)
async def help(ctx):
    emb=discord.Embed(title='Навигация по командам', color=discord.Color.red())
    emb.add_field(name='{}ban'.format( PREFIX ), value='``Забанить игрока``')
    emb.add_field(name='{}unban'.format( PREFIX ), value='``Разбанить игрока``') 
    emb.add_field(name='{}инфо'.format( PREFIX ), value='``Инфо бота``')
    emb.add_field(name='{}gstart'.format( PREFIX ), value='``Конкурс``')
    emb.add_field(name='{}server'.format( PREFIX ), value='``Инфа сервера``')
    await ctx.send(embed=emb)




#@client.command( pass_context = True )
#async def help( ctx ):
#	giveawayembed = discord.Embed(title="Команды!")
#    await ctx.send( '>ban' ) 

#@client.command()
#async def (ctx):
#    await ctx.send('оброшяйтись как ``help``')     

token - os.environ.get('BOT_TOKEN')
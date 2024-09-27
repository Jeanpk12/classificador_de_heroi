nome_do_heroi = input('Digite o nome do Herói: \n')
qtd_de_xp = float(input('Digite a quantidade de XP do herói: \n'))
nivel_do_heroi = ''

while qtd_de_xp < 0:
    print('A quantidade de XP deve ser positiva. Por favor, tente novamente.')
    qtd_de_xp = float(input('Digite a quantidade de XP do herói: \n'))

if qtd_de_xp < 1000:
    nivel_do_heroi = 'Ferro'
elif qtd_de_xp <= 2000:
    nivel_do_heroi = 'Bronze'
elif qtd_de_xp <= 5000:
    nivel_do_heroi = 'Prata'
elif qtd_de_xp <= 7000:
    nivel_do_heroi = 'Ouro'
elif qtd_de_xp <= 8000:
    nivel_do_heroi = 'Platina'
elif qtd_de_xp <= 9000:
    nivel_do_heroi = 'Ascendente'
elif qtd_de_xp <= 10000:
    nivel_do_heroi = 'Imortal'
else:
    nivel_do_heroi = 'Radiante'

print(f'O herói de nome {nome_do_heroi} está no nível de {nivel_do_heroi}')

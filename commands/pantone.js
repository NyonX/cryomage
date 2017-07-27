exports.run = (client, message, args) => {
  

    var roles = ['338242773113372673','338245322507812865','338245347031908352',
     '338246294785097728','338246302242701315','338246304553762816',
     '338246319888007168','338246326326132746',
     '338247671607328790','338247671858855938','338247672014307329',
     '338247672068702209','338247672131485706','338247690062135297',
     '338248756954791936','338246295791730688','338939418087915531',
     '338939441081090048' ];
    message.member.removeRoles(roles);

      if (args.includes('100')) {
        var role = '338242773113372673';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 100**');            
      }

      if (args.includes('148')) {
        var role = '338245322507812865';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 148**');
      }

      if (args.includes('176')) {
        var role = '338245347031908352';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 176**');
      }

      if (args.includes('205')) {
        var role = '338246294785097728';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 205**');

      }

      if (args.includes('221')) {
        var role = '338246295791730688';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 221**');

      }

      if (args.includes('257')) {
        var role = '338246302242701315';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 257**');
      }

      if (args.includes('278')) {
        var role = '338246304553762816';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 278**');
      }

      if (args.includes('310')) {
        var role = '338246319888007168';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 310**');
      }

      if (args.includes('365')) {
        var role = '338246326326132746';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 365**');
      }

      if (args.includes('426')) {
        var role = '338939441081090048';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 426**');
      }

      if (args.includes('658')) {
        var role = '338247671607328790';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 658**');
      }

      if (args.includes('707')) {
        var role = '338247671858855938';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 707**');
      }

      if (args.includes('2130')) {
        var role = '338939418087915531';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 2130**');
      }

      if (args.includes('2573')) {
        var role = '338247672014307329';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 2573**');
      }

      if (args.includes('2705')) {
        var role = '338247672068702209';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 2705**');
      }

      if (args.includes('3242')) {
        var role = '338247672131485706';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 3242**');
      }

      if (args.includes('5145')) {
        var role = '338247690062135297';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 5145**');
      }

      if (args.includes('5855')) {
        var role = '338248756954791936';
        message.member.addRole(role);
        message.delete(1,1);
        message.reply('you have equipped **Pantone 5855**');
      }

      else return;

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'pantone',
  description: 'Paints yourself with a color',
  usage: 'pantone <color number>'
};
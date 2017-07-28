exports.run = (client, message, args) => {
  
    function replaceRole(role)
      {
        member.member.addRole(role);
        member.delete(1,1);
        message.reply('You have equipped **Pantone' + ' ' + args[0] + '**');
      }
  
    var roles = ['338242773113372673','338245322507812865','338245347031908352',
     '338246294785097728','338246302242701315','338246304553762816',
     '338246319888007168','338246326326132746',
     '338247671607328790','338247671858855938','338247672014307329',
     '338247672068702209','338247672131485706','338247690062135297',
     '338248756954791936','338246295791730688','338939418087915531',
     '338939441081090048' ];
    message.member.removeRoles(roles);
      
      switch(args[0]) {
        case 100:
          var role = '338242773113372673';
          replaceRole(role);
          break;
        case 148:
          var role = '338245322507812865';
          replaceRole(role);
          break;
        case 176:
          var role = '338245347031908352';
          replaceRole(role);
          break;
        case 205:
          var role = '338246294785097728';
          replaceRole(role);
          break;
        case 221:
          var role = '338246295791730688';
          replaceRole(role);
          break;
        case 257:
          var role = '338246302242701315';
          replaceRole(role);
          break;
        case 278:
          var role = '338246304553762816';
          replaceRole(role);
          break;
        case 310:
          var role = '338246319888007168';
          replaceRole(role);
          break;
        case 365:
          var role = '338246326326132746';
          replaceRole(role);
          break;
        case 426:
          var role = '338939441081090048';
          replaceRole(role);
          break;
        case 658:
          var role = '338247671607328790';
          replaceRole(role);
          break;
        case 707:
          var role = '338247671858855938';
          replaceRole(role);
          break;
        case 2130:
          var role = '338939418087915531';
          replaceRole(role);
          break;
        case 2573:
          var role = '338247672014307329';
          replaceRole(role);
          break;
        case 2705:
          var role = '338247672068702209';
          replaceRole(role);
          break;
        case 3242:
          var role = '338247672131485706';
          replaceRole(role);
          break;
        case 5145:
          var role = '338247690062135297';
          replaceRole(role);
          break;
        case 5855:
          var role = '338248756954791936';
          replaceRole(role);
        default:
          return;
                    }

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

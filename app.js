var nodemailer = require('nodemailer');

var username = '450****92@qq.com';
var password = 'your-mailbox-password';


var smtpTransport = nodemailer.createTransport('smtps://' + username + ':' + password + '@smtp.qq.com');

smtpTransport.sendMail({
	from: 'Picker<' + username + '>',
	to: '<450****92@qq.com>',
	subject: 'Node.JS通过SMTP协议从QQ邮箱发送邮件',
	html: '这是一封测试邮件 <br> '
}, function(err, res) {
	console.log(err, res);
});
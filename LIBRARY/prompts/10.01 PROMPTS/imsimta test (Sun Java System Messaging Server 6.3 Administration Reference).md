# imsimta test (Sun Java System Messaging Server 6.3 Administration Reference)

Source URL: https://docs.oracle.com/cd/E19566-01/819-4429/acmjb/index.html

imsimta test (Sun Java System Messaging Server 6.3 Administration Reference)
 
Documentation Home
http://www.oracle.com/technetwork/indexes/documentation/index.html
 > 
Sun Java System Messaging Server 6.3 Administration Reference
https://docs.oracle.com/cd/E19566-01/819-4429/index.html
 > 
Chapter 2 Message Transfer Agent Command-line Utilities
https://docs.oracle.com/cd/E19566-01/819-4429/6n6j50mg7/index.html
 > 
Command Descriptions
https://docs.oracle.com/cd/E19566-01/819-4429/6n6j50mga/index.html
 > imsimta test
Sun Java System Messaging Server 6.3 Administration Reference
Previous: imsimta submit
https://docs.oracle.com/cd/E19566-01/819-4429/acmix/index.html
Next: imsimta test -domain
https://docs.oracle.com/cd/E19566-01/819-4429/gcyls/index.html
imsimta test
The imsimta test utilities perform tests on various areas of functionality of the MTA.
The 
imsimta test —domain
 utility is an interactive command with sub-commands that differ from the options common to the other imsimta test utilities. For information about imsimta test -domain, see 
imsimta test -domain
https://docs.oracle.com/cd/E19566-01/819-4429/gcyls/index.html
.
imsimta test -mapping
imsimta test -mapping tests the behavior of a mapping table in the mapping file. The result of mapping an input string will be output along with information about any meta characters specified in the output string.
If an input string is supplied on the command line, then only the result of mapping that input string will be output. If no input string is specified, imsimta test -mapping will enter a loop, prompting for an input string, mapping that string, and prompting again for another input string. imsimta test -mapping will exit when a CTRL-D is entered.
imsimta test -match
imsimta test -match tests a mapping pattern in order to test wildcard and global matching.
imsimta test -match prompts for a pattern and then for a target string to compare against the pattern. The output indicates whether or not the target string matched. If a match was made, the characters in the target string that matched each wildcard of the pattern is displayed. The imsimta test -match utility loops, prompting for input until the utility is exited with a CTRL-D.
imsimta test -rewrite
imsimta test -rewrite provides a test facility for examining the MTA's address rewriting and channel mapping process without actually sending a message. Various qualifiers can be used to control whether imsimta test -rewrite uses the configuration text files or the compiled configuration (if present), the amount of output produced, and so on.
If a test address is specified on the command line, imsimta test -rewrite applies the MTA address rewriting to that address, reports the results, and exits. If no test address is specified, imsimta test -rewrite enters a loop, prompting for an address, rewriting it, and prompting again for another address. imsimta test -rewrite exits when CTRL-D is entered.
When testing an email address corresponding to a restricted distribution list, imsimta test -rewrite uses as the posting address the return address of the local postmaster, which is usually postmaster@localhost unless specified by the MTA option RETURN_ADDRESS in the MTA Option file.
imsimta test -url
imsimta test -url tests an LDAP queury URL. Note that the LDAP server to query is controlled by the setting of the MTA option LDAP_SERVER in local.conf.
Syntax
imsimta test -rewrite [-alias_file=filename]
  [-channel | -nochannel
  [-check_expansions | -nocheck_expansions]
  [-configuration_file=filename ]  [-database=database_list]
  [-debug | -nodebug]  [-delivery_receipt | -nodelivery_receipt]
  [-destination_channel=channel] [-filter | -nofilter]
  [-from=address | -nofrom] [-image_file=filename | -noimage_file]
  [-input=input-file] [-local_alias=value | -nolocal_alias]
  [-mapping_file=file | -nomapping_file]
  [-option_file=filename | -nooption_file]  [-output=output-file]
  [-read_receipt | -noread_receipt] [-restricted=setting]
  [-sender=from_address] [-source_channel=channel] [-noreprocess]


imsimta test -mapping [input_string]  [-debug | -nodebug]
  [-flags=chars | -noflags]
  [-image_file=filename | -noimage_file] [-mapping_file=filename]
  [-option_file=filename | -nooption_file] [-table=table-name] [address]


imsimta test -match


imsimta test -url [-debug | -nodebug] [ldap_url]


imsimta test  -exp -mm -message=message-file[-block] [-input=input-file]
  [-output=output-file]


Options
The options for this command are:
Option
Description 
address
Specifies the test address to be rewritten. If this option is omitted, then the command prompts for an address. Used with the -rewrite option. 
input_string
The string to be matched in the left side of a mapping table. Used with the -mapping option.
ldap_url
The LDAP URL that imsimta test -url attempts to resolve.
-alias_file= 
filename
Specifies an alternate alias file for imsimta test -rewrite to use. imsimta test -rewrite normally consults the default alias file named by the IMTA_ALIAS_FILE option of the MTA tailor file, 
msg-svr-base
 /config/imta_tailor, during the rewriting process. This option has no effect unless -noimage_file is specified or no compiled configuration exists; any compiled configuration precludes reading any sort of alias file.
-block
Treats the entire input as a single sieve script. The default is to treat each line as a separate script.
-channel | -nochannel
Controls whether imsimta test -rewrite outputs detailed information regarding the channel an address matches (e.g., channel flags).
-check_expansions | -nocheck_expansions
Controls checking of alias address expansion. Normally the MTA considers the expansion of an alias to have been successful if any of the addresses to which the alias expands are legal. The -check_expansions option causes a much stricter policy to be applied: imsimta test -rewrite -check_expansions checks each expanded address in detail and reports a list of any addresses, expanded or otherwise, that fail to rewrite properly.
-configuration_file= 
file
Specifies an alternate file to use in place of the file named by IMTA_CONFIG_FILE. Normally, imsimta test -rewrite consults the default configuration file named by the IMTA_CONFIG_FILE option of the MTA tailor file, 
msg-svr-base
 /config/imta_tailor, during the rewriting process. This option has no effect unless -noimage_file is specified or no compiled configuration exists; use of any compiled configuration precludes reading any sort of configuration file.
-database= 
database-list
Disables references to various databases or redirects the database paths to nonstandard locations. imsimta test -rewrite normally consults the usual MTA databases during its operation. The allowed list items are alias, noalias, domain, nodomain, general, nogeneral, reverse, and noreverse. The list items beginning with “ no” disable use of the corresponding database. The remaining items require an associated value, which is taken to be the name of that database.
-debug | -nodebug
Enables the production of the additional, detailed explanations of the rewriting process. This option is disabled by default.
-delivery_receipt | -nodelivery_receipt
Sets the corresponding receipt request flags. These options can be useful when testing the handling of sent or received receipt requests when rewriting forwarded addresses or mailing lists.
-destination_channel= 
channel
Controls to which destination or target channel imsimta test -rewrite rewrites addresses. Some address rewriting is destination channel specific; imsimta test -rewrite normally pretends that its channel destination is the local channel l.
-exp
imsimta test -exp tests Sieve language statements against a specified RFC2822 message and sends the results of the filter to standard output.
The syntax is as follows:
imsimta test -exp -mm -block -input=Sieve_language_scriptfile -message=rfc2822_message_file
where,
-block treats the entire input as a single Sieve script. The default is to treat each line as a separate script and to evaluate it separately. The Sieve will only be evaluated once the end of file is reached.
-input=Sieve_file is a file containing the Sieve script. The default is to read the test script lines or script block from stdin.
-message=message_file is a text file containing the RFC 2822 message you want to test your Sieve script against. This has to be an RFC 2822 message only. It cannot be a queue file (not a zz*.00 file).
Once activated, this command reads script information, evaluates it in the context of the test message, and writes out the result. The result shows what actions would be taken as well as the result of evaluating the final statement in the script.
Additional useful qualifiers are:
-from=address specifies the envelope from address to be used in envelope tests. The default is to use the value specified by the RETURN_ADDRESS MTA option.
-output=file writes results to file. The default is to write the results of script evaluation to stdout.
-filter | -nofilter
Outputs any filters that are applied for the specified address.
-from= 
address
 | -nofrom
Controls what envelope From: address is used for access control probes when the -from option is specified. If 
address
 is omitted, the postmaster return address is used for such probes. If the -nofrom option is specified, the MTA uses an empty envelope From: address for access probes.
-flags= 
chars
 | -noflags
Specifies particular flags to be set during the mapping test when the -flags option is specified. For example, 
chars
 can be E (envelope), B (header/body), or I (message id) when testing a REVERSE mapping. Used with the -mapping option only.
-image_file=[ 
filename
 ] | -noimage_file
The -noimage_file option instructs the command to unconditionally ignore any previously compiled configuration and to read configuration information from the various text files instead. When the -image_file option is specified without an optional file name, the compiled configuration is loaded from the file named by the IMTA_CONFIG_DATA option into the MTA tailor file, 
msg-svr-base
 /config/imta_tailor, which is usually 
msg-svr-base
 /config/imta.cnf. If, instead, a file name is specified, then the compiled configuration is loaded from the specified file.
-input= 
input-file
Specifies a source for input. By default, imsimta test takes input from stdin.
-local_alias= 
value
 | -nolocal_alias
Controls the setting of an alias for the local host. The MTA supports multiple “identities” for the local host; the local host may have a different identity on each channel. This option may be used to set the local host alias to the specified value; appearances of the local host in rewritten addresses are replaced by this value.
-mapping_file= 
file
 | -nomapping_file
Instructs the command to use the specified mapping file rather than the default mapping file named by the IMTA_MAPPING_FILE option in the MTA tailor file, 
msg-svr-base
 /config/imta_tailor, which is usually the file named 
msg-svr-base
 /config/mappings. This option has no effect unless -noimage_file is specified or no compiled configuration exists; use of any compiled configuration precludes reading the mappings file. Use of the -nomapping_file option will prevent the IMTA_MAPPING_FILE file from being read in when there is no compiled configuration.
-message= 
message-file
Specifies the text file containing the message that is tested. The 
message-file
 must be an RFC 822 message only; it cannot be a queue file.
-mm
Tells imsimta test -exp to load the sieve-specific extensions to the expression interpreter. This includes all the sieve tests and actions such as header, address, envelope, discard, fileinto, and keep. Without -mm you cannot test sieves. The command to test sieves against a message is:
imsimta test -expression -mm -message= 
message
-noreprocess
Turns off the internal reprocessing flag that would otherwise be set. This option is useful for simulating the behavior of other components that operate without the reprocessing flag being set. This can be thought of as controlling whether or not rewrite_test acts as if it were the reprocessing channel. The biggest effect is that it turns off deferred list processing. Normally it should be done so this switch defaults on; use -noreprocessing to disable expansion.
-option_file= 
filename
 | -nooption_file
Instructs the command to use the specified option file rather than the default option file named by the IMTA_OPTION_FILE option in the MTA tailor file, 
msg-svr-base
 /config/imta_tailor, which is usually the file 
msg-svr-base
 /config/options.dat. This option has no effect unless -noimage_file is specified or no compiled configuration exists; use of any compiled configuration precludes reading any sort of option file. Use of the -nooption_file option prevents the IMTA_OPTION_FILE file from being read in when there is no compiled configuration.
-output= 
output-file
Directs the output of imsimta test. By default, imsimta test writes output to stdout. This option only works if the mailsrv account has write access to the current working directory.
-read_receipt | -noread_receipt
Sets the corresponding receipt request flags. This option can be useful when testing the handling of receipt requests at the time of rewriting forwarded addresses or mailing lists.
-restricted= 
setting
Controls the setting of the restricted flag. By default, this flag has value 0. When set to 1, -restricted=1, the restricted flag is set on and addresses are rewritten using the restricted mailbox encoding format recommended by RFC 1137. This flag is used to force rewriting of address mailbox names in accordance with the RFC 1137 specifications.
-sender= 
from_address
A value used to set the “authenticated sender” (final field) of FROM_ACCESS mapping table probes. That is, one received as a result of SASL authentication. This allows test -rewrite to be used to test these mappings.
-source_channel= 
channel
Controls which source channel is performing the rewriting. Some address rewriting is source channel-specific; imsimta test -rewrite normally assumes that the channel source for which it is rewriting is the local channel l.
-table= 
table-name
Specifies the name of the mapping table to test. If this option is not specified, then imsimta test -mapping prompts for the name of the table to use.
Example
This example shows typical output generated by imsimta test -rewrite. The most important piece of information generated by imsimta test -rewrite is displayed on the last few lines of the output, which shows the channel to which imsimta test -rewrite would submit a message with the specified test address and the form in which the test address would be rewritten for that channel. This output is invaluable when debugging configuration problems.
imsimta test -rewrite

Address: joe.blue
channel = l
channel description =
channel description =
channel flags #1 = BIDIRECTIONAL MULTIPLE IMMNONURGENT NOSERVICEALL
channel flags #2 = NOSMTP POSTHEADBODY HEADERINC NOEXPROUTE
channel flags #3  = LOGGING NOGREY NORESTRICTED
channel flags #4 = EIGHTNEGOTIATE NOHEADERTRIM NOHEADERREAD RULES
channel flags #5 =
channel flags #6 = LOCALUSER NOX_ENV_TO RECEIPTHEADER
channel flags #7 = ALLOWSWITCHCHANNEL NOREMOTEHOST DATEFOUR DAYOFWEEK
channel flags #8 = NODEFRAGMENT EXQUOTA REVERSE NOCONVERT_OCTET_STREAM
channel flags #9       = NOTHURMAN INTERPRETENCODING

text/plain charset def = (7) US-ASCII 5 (8) ISO-8859-1 51
channel envelope address type = SOURCEROUTE
channel header address type = SOURCEROUTE
channel official host  = mailserver.eng.alpha.com
channel local alias    =
channel queue name     =
channel after param    =
channel daemon name    =
channel user name      =
notices                =
channel group ids      =
header To: address     = joe.blue@mailserver.eng.alpha.com
header From: address   = joe.blue@mailserver.eng.alpha.com
envelope To: address   = joe.blue@mailserver.eng.alpha.com  
(route (mailserver.eng.alpha.com,mailserver.eng.alpha.com))
envelope From: address = joe.blue@mailserver.eng.alpha.com
name                   =
mbox                   = joe.blue
Extracted address action list: joe.blue@mailserver.eng.alpha.com
Extracted 733 address action list: joe.blue@mailserver.eng.alpha.com
Expanded address:
  joe.blue@mailserver.eng.alpha.com
Submitted address list:
  ims-ms
joe.blue@ims-ms-daemon (sims-ms-daemon) *NOTIFY FAILURES* *NOTIFY DELAYS*
Submitted notifications list:
Address:
#


In the following example, the sample PAGER mapping is tested. The -mapping_file option is used to select the mapping file pager_table.sample instead of the default mapping file.
imsimta test -mapping -noimage_file \
 -mapping_file=msg-svr-base/config/pager_table.sample


In the following example, the sample mapping pattern $[ax1]
@
.xyz.com is tested for several sample target strings:
imsimta test -match

Pattern: $[ax1]*@*.xyz.com
 [  1S] cglob [1ax]
 [  2] "@"
 [ 3S] glob, req 46, reps 2
 [  4] "."
 [  5] "x"
 [  6] "y"
 [  7] "z"
 [  8] "."
 [  9] "c"
 [ 10] "o"
 [ 11] "m"
Target: xx11aa@sys1.xyz.com
Match.
0 - xx11aa
1 - sys1
Pattern: $[ax1]*@*.xyz.com
Target: 12a@node.xyz.com
No match.
Pattern: $[ax1]*@*.xyz.com
Target: 1xa@node.acme.com
Match.
0 - 1xa
1 - node
Pattern: ^D
%


Previous: imsimta submit
https://docs.oracle.com/cd/E19566-01/819-4429/acmix/index.html
Next: imsimta test -domain
https://docs.oracle.com/cd/E19566-01/819-4429/gcyls/index.html
© 2010, Oracle Corporation and/or its affiliates
Cookie Preferences
https://docs.oracle.com/cd/E19566-01/819-4429/acmjb/index.html
Ad Choices
https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html#12
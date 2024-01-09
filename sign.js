const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink= document.querySelector('.register-link');
registerLink.addEventListener('click',()=>
{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>
{
    wrapper.classList.remove('active');
});
function showSidebar()
{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar()
{
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display='none'
}
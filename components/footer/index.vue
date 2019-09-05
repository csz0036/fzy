<template>
    <div id="pageFooter">
        <p class="ewm"><span></span></p>
        <p class="tel"><i></i>4000-550-650</p>
        <p class="addr">北京市海淀区西小口66号东升科技园.北领地C区1号楼 </p>
           
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#pageFooter{
    background: #464B4F;
    text-align: center;
    color: #FFF;
    height: 3.32rem;
    width: 100%;
    .ewm{
        text-align: center;
        height: 2.32rem;
        padding: .36rem 0 .22rem;
        span{
            width: 1.74rem;
            height: 1.74rem;
            background-color: #fff;
            display: inline-block;
            background: url(/ewm.png) center center no-repeat;
            background-size: 100%
        }
    }
    .tel{
        font-size: .24rem;
        margin-bottom: .1rem;
        i{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAABy1BMVEX////7+/tHTFD9/f2NkJPm5+dITVFGS0/KzM1JTlKNkJLX2NlQVFhmam7+/v7Cw8Xp6upiZmnh4uNUWVxbX2NMUVX5+vrc3d7d3t+pq619gIPQ0dLP0dLJysvf4OGytLZQVVnCxMVobG/o6elSV1rZ2ttRVlrS09Slp6lKT1P4+Pjx8fGIi42tr7GeoaOXmpxqbnHExcfU1ta1t7nMzs9ydnny8/ORlJaKjY+vsrOChoh6foFlaWzGx8ldYWXAwsOytLWqra64uryLjpGxs7VXW1+qrK729vZucnXv7+/Bw8SUl5lna27n6Oj19faFiYvn5+hfY2eFiIvR0tOkpqijpqj39/fKy8ydn6FgZWjg4eKztbesrrCdoKJpbXC8vr+PkpRwc3e1t7jw8PFobHCOkZRTV1ulqKp4fH9LUFT5+fnMzc6foaNxdXjx8vK8vsDi4+SBhIenqaufoqTr6+zk5OVcYGSvsbPV1tenqqzOz9Cho6Wgo6Vzd3r09PRscHPs7e2SlZeKjpBdYmXe39+Dh4ns7O2/wMJPVFfk5ea3ubuwsrRVWl7W19hOU1f8/Px0eHv09fWanZ9tcXSTlphlam25u7yMj5FeY2a61rthAAACL0lEQVR42u2WZ1fUQBSGd7NuyBbcviBl6b336gIWQBQBxV4pFrChVAWVpqICIir6c5k792wm2cw5yXD8pvPpnbl5MpO5LbaUI4z/kBl04Y67YzIkCLltMDYf/RCBjgEDY+6nS2wnHM5Kq9ClgmmGlWxbvr3izjUlipS/lg+9XdwvM4K7NROUKm/nQKFrxHKSt5+31A6UvckAxT/T973kHrPpHNgqRpKgcAEe3cOezKivO1NZiDqcBsagVwcVBhPXlKr307e6Tjo564fZCR3UiARbZ851tFHX5l8lOrqggbaYQ9KNEVESUqcvNFAxg46rIfMsJ28Q1zxTZCqlgzXAIJeDUQ+11/Y+m67dA/0YVLXmm/wqczHptluoj/ZAxogo0kB5KjTOC3Z8thRUmEEZCWY41+BZX8ITtSBOM0hyItMcMIZDAAzLoPqImNVExH2EXvOCCKJBATFDxC0NJONWVTzoVMJ9WRjSLGDXMUV5UA8xrILoImJHlxr1lPrNgQbI+k0Q4LRMHfSLOuT7DSPUpigKDcnbRFzRZ+4rulUsV6hYRtIo1egSqrB/min1SRIqyx0Ytw1itXwFXdwt1gC+INWAJ0z1VbzLeho3g6QupHwRyIoopuWbDya1XD5AKljjfsIS82OrSS3vtfFGjkkDaC3nQE6zrnF33ghVm7aaSJUjibksW+hPYx4dk+m11tSGnCpiHy2z2j7l9iWKPP+6IfQfkX/++oN++Z//N/rr0CF3uG33hXuWoQAAAABJRU5ErkJggg==) no-repeat center;
            background-size: contain;
            width: .2rem;
            height: .2rem;
        }
    }
    .addr{
        font-size: .2rem;
    }
}
</style>
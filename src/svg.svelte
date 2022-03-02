<script>
 
	export let radius = 5
    export let mode = 1
    //only hex colors !
    export let color ="#dfac20"
    export let id=""

    id=id.substring(0,6);

</script>

{#if mode == 0}
<pattern id={id} x="0" y="0" width={20} height={20}  patternUnits="userSpaceOnUse">
    
    <circle fill={color} cx={10}  cy={10} r={radius/10}  />
</pattern>
{:else if mode == 1}

<pattern id={id} x="5" y="5" width="20" height="20" patternUnits="userSpaceOnUse">
    <rect width="{radius/10}" height="{radius/10}"  fill={color}  />
</pattern>

{:else if mode == 2}

<pattern id={id} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
     <polyline points="0,0 50,50 100,10 120,80 270,100 100,130" 
    stroke-linecap="round" fill="none" 
    stroke={color} stroke-width={radius/10} />
</pattern>

{:else if mode == 3}
<pattern id={id} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <polyline points="10,10 30,2 60,40 40" stroke-width={radius/10} stroke={color} fill={color} 
   />
</pattern>

{:else if mode == 4}
<pattern id={id} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    <polyline points="10,10 30,40 40" stroke-width={radius/10} stroke={color} fill={color} 
   />
</pattern>


{/if}
<rect width="400" height="200" fill="url(#{id})"  />
